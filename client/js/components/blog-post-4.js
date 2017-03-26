if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class BlogPostFourComponent extends React.Component {
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
          <div className="logo"></div>
          <ul>
          <li><ReactRouter.Link to={'/NewReleases'}>New Releases</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/PopularMain'}>Popular</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/Categories'}>Categories</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/RecentPosts'}>Recent Posts</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/Author'}>Author interviews</ReactRouter.Link></li>
          </ul>
          </div>
        </header>

      <div className="other-pics tabs-img-4">
        <div id="home-pic-title">Book Blog</div>
      </div>
      <div className="blog-post">
        <h1>Blog Post Four</h1>
        <h1>MongoDB in Action</h1>
        <p>MongoDB in Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.</p>
        <p className="blog-post-end">Big data can mean big headaches. MongoDB is a document-oriented database designed to be flexible, scalable, and very fast, even with big data loads. It is built for high availability, supports rich, dynamic schemas, and lets you easily distribute data across multiple servers.</p>

        </div>

      <footer>
        <p>© copyright 2017 BOOK BLOG</p>
      </footer>
      </div>
    }
  }

  BlogTest.BlogPostFourComponent = BlogPostFourComponent;
})();
