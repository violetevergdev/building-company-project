import HeaderFooterListItem from "./HeaderFooter-ListItem.tsx";

const HeaderFooter = () => {
  return (
    <div className="header_footer">
      <div className="container">
        <div className="header_footer-substrate">
          <div className="header_footer-cards">
            <ul className="header-list">
              <HeaderFooterListItem />
              <HeaderFooterListItem />
              <HeaderFooterListItem />
              <HeaderFooterListItem />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFooter;
