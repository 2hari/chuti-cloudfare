import Layout from "@/components/Layout";

export const config = {
  runtime: "experimental-edge",
};

export async function getServerSideProps() {
  // Get all homes
  // const homes = await prisma.home.findMany();
  // Pass the data to the Home page
  return {
    props: {
      homes: "5",
      // homes: JSON.parse(JSON.stringify(homes)),
    },
  };
}

export default function Home({ homes = "" }) {
  return (
    <Layout>
      <h1 className="text-xl font-medium text-gray-800">
        Top-rated places to stay
      </h1>
      <p className="text-gray-500">
        Explore some of the best places in the world
      </p>
      <h1>{homes}</h1>
    </Layout>
  );
}
