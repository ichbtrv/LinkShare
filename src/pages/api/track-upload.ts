import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabase'
import uuid from 'uuid'
import { decode } from 'base64-arraybuffer'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Upload track to Supabase
  console.log(req.body)
  if (req.method === 'POST') {
    let { track } = req.body

    if (!track) {
      return res.status(500).json({ message: 'No track provided' })
    }

    try {
      const contentType = track.match(/data:(.*);base64/)?.[1]
      const base64FileData = track.split('base64,')?.[1]

      if (!contentType || !base64FileData) {
        return res.status(500).json({ message: 'track data not valid' })
      }

      // Upload track
      const fileName = uuid()
      const ext = contentType.split('/')[1]
      const path = `${fileName}.${ext}`

      const { data, error: uploadError } = await supabase.storage
        .from(process.env.SUPABASE_BUCKET as string)
        .upload(path, decode(base64FileData), {
          contentType,
          upsert: true,
        })

      if (uploadError) {
        console.log(uploadError)
        throw new Error('Unable to upload track to storage')
      }

      // Construct public URL
      const url = `${process.env.SUPABASE_URL}/storage/v1/object/public/${data?.Key}`

      return res.status(200).json({ url })
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['POST'])
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` })
  }
}

export default handler
