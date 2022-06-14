import { supabase } from '@/utils/supabase';
import { debug } from 'console';
import React from 'react'

const Session = (...props) => {
  return (
    <div>it worked </div>
  )
}


export async function getStaticPaths() {


  let { data: upload_session } = await supabase
    .from('upload_session')
    .select('id')

  console.log(upload_session);
  return {
    paths: upload_session!.map(ses => ({
      params: { id: ses.id }
    })),
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  console.log(params)
  let { data: upload_session } = await supabase
    .from('upload_session')
    .select(params.id);

  console.log(params)
  // Get the current home from the database


  if (params.id) {
    return {
      props: { result: upload_session }
    };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}


export default Session