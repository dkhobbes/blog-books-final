if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class MainPageComponent extends React.Component {
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
        <div id="home-pic">
          <div id="home-pic-title">Book Blog</div>
        </div>

        <section id="spacing">
          <div id="intro-main">
          <h1>Welcome to the Book Review Blog</h1>
          <p>Read the from the recent blog posts on some of the most interesting stories, and characters out there.</p>
          </div>
        </section>
        <div id="read-title-main">
          <h1>Blog Posts</h1>
        </div>

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

        // <div id="read-more-main">
        //   <h1>Read more coming soon ...</h1>
        // </div>

          <div id="archive-main">
            <h1>Archive</h1>
            <ul id="archive-main-list">
              <ReactRouter.Link to={'/Archive'}><li>2017</li></ReactRouter.Link>
              <ReactRouter.Link to={'/Archive'}><li>2016</li></ReactRouter.Link>
              <ReactRouter.Link to={'/Archive'}><li>2015</li></ReactRouter.Link>
            </ul>
          </div>

        <div id="newsletter-main">
          <div>
          <form>
            <h1>Get Newsletter</h1>
            <input type="text" />
            <button>sign up</button>
          </form>
          </div>
        </div>

        <footer>
          <p>© copyright 2017 BOOK BLOG</p>
        </footer>
      </div>
    }
  }

  BlogTest.MainPageComponent = MainPageComponent;
})();
