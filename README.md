# LinkShare

First draft of private audio sharing with dynamic routes

The basic idea is to create a web app like wetransfer but with a customized UI that lets you preview tracks before you download them, as well as only download select ones.
<br/>
<br/>

Working So Far:
<br/>
<br/>

- AudioPlayer and File Upload to client
- File Upload to Supabase Storage
- Creation of a new dynamic route in PostgresDB after File Upload to Storage

<br/>
<br/>

Having some trouble with:
<br/>
<br/>

- Getting the URLs of the uploaded files to the dynamic route as props, as opposed to just reading from Supabase storage again

<br/>
<br/>

Coming soon
<br/>
<br/>
-Auth and persisting saved sessions

<img src="https://i.imgur.com/BIGGVg5.jpg" width="750" />
