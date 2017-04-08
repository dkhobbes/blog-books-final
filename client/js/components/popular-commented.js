if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class PopularCommentedComponent extends React.Component {
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
        <div id="archive-title">Popular Commented</div>
        <section>
          <ReactRouter.Link to={'/PostOne'}>
            <div className="tabs tabs-one tabs-img-1">
              <div className="blog-pic-title">one</div>
              <div className="blog-pic-summary">Building rich JavaScript applications that bring a desktop experience to the Web requires...</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PostTwo'}>
            <div className="tabs tabs-img-2">
              <div className="blog-pic-title">two</div>
              <div className="blog-pic-summary">Forms make or break the most...</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom tabs-one">
            <h1 className="center-blog-info">11/15/16 <span className="white"> | </span> Review of Javascript Web Applications</h1>
          </div>
          <div className="tabs-bottom">
            <h1 className="center-blog-info">11/15/16 <span className="white"> | </span> Web Form Design</h1>
          </div>
        </section>

        <section>
          <ReactRouter.Link to={'/PostThree'}>
            <div className="tabs tabs-one tabs-img-3">
              <div className="blog-pic-title">three</div>
              <div className="blog-pic-summary">Building rich JavaScript applications that bring a desktop experience to the Web requires...</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PostFour'}>
            <div className="tabs tabs-img-4">
              <div className="blog-pic-title">four</div>
              <div className="blog-pic-summary">Building rich JavaScript applications that bring a desktop experience to the Web requires...</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom tabs-one">
            <h1 className="center-blog-info">11/15/16 <span className="white"> | </span> Pro Angular JS</h1>
          </div>
          <div className="tabs-bottom">
            <h1 className="center-blog-info">11/15/16 <span className="white"> | </span> MongoDB in Action</h1>
          </div>
        </section>

        <section>
          <ReactRouter.Link to={'/PostFive'}>
            <div className="tabs tabs-one tabs-img-5">
              <div className="blog-pic-title">five</div>
              <div className="blog-pic-summary">Building rich JavaScript applications that bring a desktop experience to the Web requires...</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PostSix'}>
            <div className="tabs tabs-img-6">
              <div className="blog-pic-title">six</div>
              <div className="blog-pic-summary">Building rich JavaScript applications that bring a desktop experience to the Web requires...</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom tabs-one">
            <h1 className="center-blog-info">11/15/16 <span className="white"> | </span> Review of Javascript Web Applications</h1>
          </div>
          <div className="tabs-bottom">
            <h1 className="center-blog-info">11/15/16 <span className="white"> | </span> Review of Javascript Web Applications</h1>
          </div>
        </section>

        <section>
          <ReactRouter.Link to={'/PostThree'}>
            <div className="tabs tabs-one tabs-img-3">
              <div className="blog-pic-title">three</div>
              <div className="blog-pic-summary">Building rich JavaScript applications that bring a desktop experience to the Web requires...</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PostFour'}>
            <div className="tabs tabs-img-4">
              <div className="blog-pic-title">four</div>
              <div className="blog-pic-summary">Building rich JavaScript applications that bring a desktop experience to the Web requires...</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom tabs-one">
            <h1 className="center-blog-info">11/15/16 <span className="white"> | </span> Review of Javascript Web Applications</h1>
          </div>
          <div className="tabs-bottom">
            <h1 className="center-blog-info">11/15/16 <span className="white"> | </span> Review of Javascript Web Applications</h1>
          </div>
        </section>

        <section>
          <ReactRouter.Link to={'/PostFive'}>
            <div className="tabs tabs-one tabs-img-5">
              <div className="blog-pic-title">five</div>
              <div className="blog-pic-summary">Building rich JavaScript applications that bring a desktop experience to the Web requires...</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PostSix'}>
            <div className="tabs tabs-img-6">
              <div className="blog-pic-title">six</div>
              <div className="blog-pic-summary">Building rich JavaScript applications that bring a desktop experience to the Web requires...</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom tabs-one">
            <h1 className="center-blog-info">11/15/16 <span className="white"> | </span> Review of Javascript Web Applications</h1>
          </div>
          <div className="tabs-bottom">
            <h1 className="center-blog-info">11/15/16 <span className="white"> | </span> Review of Javascript Web Applications</h1>
          </div>
        </section>
        <div id="spacing"></div>

        <footer className="tenLinks">
          <p>© copyright 2017 BOOK BLOG</p>
        </footer>
      </div>
    }
  }

  BlogTest.PopularCommentedComponent = PopularCommentedComponent;
})();
