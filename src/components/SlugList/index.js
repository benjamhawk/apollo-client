import { useQuery, gql } from "@apollo/client";
import { LoadingBackdrop } from "../LoadingBackdrop";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import styles from "./SlugList.module.css";

export const GET_LINKS_QUERY = gql`
  {
    allLinks {
      url
      slug
    }
  }
`;

export const SlugList = () => {
  const { loading, data } = useQuery(GET_LINKS_QUERY);

  if (loading) {
    return <LoadingBackdrop />;
  }

  return (
    <Paper>
      <List className={styles.list}>
        {data?.allLinks?.map((link) => {
          return (
            <ListItem key={link.id} className={styles.listItem}>
              <Link href="/">{link.url}</Link>
              <DoubleArrowIcon />
              <Link href="/">{`${link.slug}`}</Link>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};
