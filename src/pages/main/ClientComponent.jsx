import React from "react";
import { SearchBar } from "../../components/SearchBar";
import { ContentSlider } from "../../components/ContentSlider";
import styles from "./clientComponent.module.css";
export const ClientComponent = ({
  items,
  stats,
  searchRequest,
  nextPageRequest,
}) => {
  return (
    <>
      <div className={styles.clientComponent_wrap}>
        <div className={styles.logo}>
          <span className={styles.my}>My</span>
          <span className={styles.tube}>tube</span>
        </div>
        <SearchBar searchRequest={(input) => searchRequest(input)} />

        {items.length > 0 && (
          <ContentSlider
            items={items}
            stats={stats}
            nextPageRequest={() => nextPageRequest()}
          />
        )}
      </div>
    </>
  );
};
