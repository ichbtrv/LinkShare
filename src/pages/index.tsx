import Layout from "@/components/Layout";
import { supabase } from "@/utils/supabase";


import Dashboard from "./Dashboard";

const Home = () => {

  const getIds = async () => {

    let { data: upload_session, error } = await supabase
      .from('upload_session')
      .select('id')

    console.log(upload_session)
  }

  getIds();

  return (
    <section className="">
      <Dashboard />
    </section>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
