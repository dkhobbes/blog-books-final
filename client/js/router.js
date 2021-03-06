if (window.BlogTest === undefined) {window.BlogTest = {}; }

(function() {
var mountNode = document.querySelector('#react-root');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var router = <Router history={ReactRouter.hashHistory}>
      <Route path="/" component={BlogTest.MainPageComponent} />
      <Route path="/Archive" component={BlogTest.ArchiveComponent} />
      <Route path="/PostOne" component={BlogTest.BlogPostOneComponent} />
      <Route path="/PostTwo" component={BlogTest.BlogPostTwoComponent} />
      <Route path="/PostThree" component={BlogTest.BlogPostThreeComponent} />
      <Route path="/PostFour" component={BlogTest.BlogPostFourComponent} />
      <Route path="/PostFive" component={BlogTest.BlogPostFiveComponent} />
      <Route path="/PostSix" component={BlogTest.BlogPostSixComponent} />
      <Route path="/PopularShared" component={BlogTest.PopularSharedComponent} />
      <Route path="/PopularCommented" component={BlogTest.PopularCommentedComponent} />
      <Route path="/PopularViewed" component={BlogTest.PopularViewedComponent} />
      <Route path="/PopularMain" component={BlogTest.PopularMainComponent} />
      <Route path="/About" component={BlogTest.AboutComponent} />
      <Route path="/Author" component={BlogTest.AuthorComponent} />
      <Route path="/Categories" component={BlogTest.CategoriesComponent} />
      <Route path="/MyBooks" component={BlogTest.MyBooksComponent} />
      <Route path="/NewReleases" component={BlogTest.NewReleasesComponent} />
      <Route path="/RecentPosts" component={BlogTest.RecentPostsComponent} />
    </Router>;

ReactDOM.render(router, mountNode);
})();
