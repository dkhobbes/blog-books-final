if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class BlogPostThreeComponent extends React.Component {
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

      <div className="other-pics tabs-img-3">
        <div id="home-pic-title">Book Blog</div>
      </div>
      <div className="blog-post">
        <h1>Blog Post Three</h1>
        <h1>Pro Angular JS</h1>
        <p>AngularJS is the leading framework for building dynamic JavaScript applications that take advantage of the capabilities of modern browsers and devices. AngularJS, which is maintained by Google, brings the power of the Model-View-Controller (MVC) pattern to the client, providing the foundation for complex and rich web apps. It allows you to build applications that are smaller, faster, and with a lighter resource footprint than ever before.</p>
        <p>Best-selling author Adam Freeman explains how to get the most from AngularJS. He begins by describing the MVC pattern and the many benefits that can be gained from separating your logic and presentation code. He then shows how you can use AngularJSs features within in your projects to produce professional-quality results. Starting from the nuts-and-bolts and building up to the most advanced and sophisticated features AngularJS is carefully unwrapped, going in-depth to give you the knowledge you need.</p>
        <p className="blog-post-end">Each topic is covered clearly and concisely and is packed with the details you need to learn to be truly effective. The most important features are given a no-nonsense in-depth treatment and chapters include common problems and details of how to avoid them.</p>
        </div>

      <footer>
        <p>© copyright 2017 BOOK BLOG</p>
      </footer>
      </div>
    }
  }

  BlogTest.BlogPostThreeComponent = BlogPostThreeComponent;
})();
