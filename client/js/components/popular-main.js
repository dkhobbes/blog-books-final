if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class PopularMainComponent extends React.Component {
    constructor() {
      super();
    }

    render(){
      return <div>
        <header>
          <div id="eyebrow-nav">
          <ul>
            <li><ReactRouter.Link to={'/About'}>About</ReactRouter.Link></li>
            <li><ReactRouter.Link to={'/MyBooks'}>My books</ReactRouter.Link></li>
            <li><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></li>
          </ul>
        </div>
        <div id="main-nav">
          <ReactRouter.Link to={'/'}><div className="logo"></div></ReactRouter.Link>
          <ul>
          <li><ReactRouter.Link to={'/NewReleases'}>New Releases</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/PopularMain'}>Popular</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/Categories'}>Categories</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/RecentPosts'}>Recent Posts</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/Author'}>Author interviews</ReactRouter.Link></li>
          </ul>
          </div>
        </header>
        <div id="archive-title">Welcome to the most Popular sections</div>
        <section id="spacing">
          <div id="intro-main">
          <h1>Most Viewed, Most Shared, and Most Commented</h1>
          <p>Read the from the recent blog posts on some of the most interesting stories, and characters out there.</p>
          </div>
        </section>
        <section>
          <ReactRouter.Link to={'/PopularCommented'}>
            <div className="tabs-popular tabs-one-popular tabs-img-1">
              <div className="blog-pic-title">one</div>
                <div className="blog-pic-summary">Building rich JavaScript applications that bring...</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PopularShared'}>
            <div className="tabs-popular tabs-two-popular tabs-img-2">
              <div className="blog-pic-title">two</div>
                <div className="blog-pic-summary">Building rich JavaScript applications that bring...</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PopularViewed'}>
            <div className="tabs-popular tabs-img-3">
              <div className="blog-pic-title">three</div>
                <div className="blog-pic-summary">Building rich JavaScript applications that bring...</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom-popular tabs-one-popular">
            <h1 className="center-blog-info">Most Commented</h1>
          </div>
          <div className="tabs-bottom-popular tabs-two-popular">
            <h1 className="center-blog-info">Most Shared</h1>
          </div>
          <div className="tabs-bottom-popular">
            <h1 className="center-blog-info">Most Viewed</h1>
          </div>
        </section>

        <div id="spacing"></div>

        <footer>
          <p>© copyright 2017 BOOK BLOG</p>
        </footer>
      </div>
    }
  }

  BlogTest.PopularMainComponent = PopularMainComponent;
})();
