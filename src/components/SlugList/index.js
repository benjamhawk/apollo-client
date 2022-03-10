import { useQuery, gql } from "@apollo/client";
import { LoadingBackdrop } from "../LoadingBackdrop";

export const GET_LINKS_QUERY = gql`
  {
    allLinks {
      url
      slug
    }
  }
`;

export const SlugList = () => {
  const { loading, error, data } = useQuery(GET_LINKS_QUERY);

  if (loading) {
    return <LoadingBackdrop />;
  }

  return (
    <ul>
      {data?.allLinks?.map((link) => {
        return <li key={link.id}>{`${link.url} ${link.slug}`}</li>;
      })}
    </ul>
  );
};
