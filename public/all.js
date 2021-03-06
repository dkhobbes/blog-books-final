'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var AboutComponent = function (_React$Component) {
    _inherits(AboutComponent, _React$Component);

    function AboutComponent() {
      _classCallCheck(this, AboutComponent);

      return _possibleConstructorReturn(this, (AboutComponent.__proto__ || Object.getPrototypeOf(AboutComponent)).call(this));
    }

    _createClass(AboutComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'About us ... more information coming soon'
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            { className: 'tenLinks' },
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return AboutComponent;
  }(React.Component);

  BlogTest.AboutComponent = AboutComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var ArchiveComponent = function (_React$Component) {
    _inherits(ArchiveComponent, _React$Component);

    function ArchiveComponent() {
      _classCallCheck(this, ArchiveComponent);

      return _possibleConstructorReturn(this, (ArchiveComponent.__proto__ || Object.getPrototypeOf(ArchiveComponent)).call(this));
    }

    _createClass(ArchiveComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'Full list of Archives'
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostOne' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-1' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'one'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostTwo' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-2' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'two'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostThree' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-3' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'three'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFour' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-4' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'four'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-5' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'five'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostSix' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-6' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'six'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostThree' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-3' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'three'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFour' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-4' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'four'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-5' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'five'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostSix' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-6' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'six'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            { className: 'tenLinks' },
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return ArchiveComponent;
  }(React.Component);

  BlogTest.ArchiveComponent = ArchiveComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var AuthorComponent = function (_React$Component) {
    _inherits(AuthorComponent, _React$Component);

    function AuthorComponent() {
      _classCallCheck(this, AuthorComponent);

      return _possibleConstructorReturn(this, (AuthorComponent.__proto__ || Object.getPrototypeOf(AuthorComponent)).call(this));
    }

    _createClass(AuthorComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'Author interviews ... more information coming soon'
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            { className: 'tenLinks' },
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return AuthorComponent;
  }(React.Component);

  BlogTest.AuthorComponent = AuthorComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostOneComponent = function (_React$Component) {
    _inherits(BlogPostOneComponent, _React$Component);

    function BlogPostOneComponent() {
      _classCallCheck(this, BlogPostOneComponent);

      return _possibleConstructorReturn(this, (BlogPostOneComponent.__proto__ || Object.getPrototypeOf(BlogPostOneComponent)).call(this));
    }

    _createClass(BlogPostOneComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'other-pics tabs-img-1' },
            React.createElement(
              'div',
              { id: 'home-pic-title' },
              'Book Blog'
            )
          ),
          React.createElement(
            'div',
            { className: 'blog-post' },
            React.createElement(
              'h1',
              null,
              'Blog Post One'
            ),
            React.createElement(
              'h1',
              null,
              'JavaScript Web Applications'
            ),
            React.createElement(
              'p',
              null,
              'Building rich JavaScript applications that bring a desktop experience to the Web requires moving state from the server to the client side\u2014not a simple task. This hands-on book takes proficient JavaScript developers through all the steps necessary to create state-of-the-art applications, including structure, templating, frameworks, communicating with the server, and many other issues.'
            ),
            React.createElement(
              'p',
              null,
              'Throughout the book, you will work with real-world example applications to help you grasp the concepts involved. Learn how to create JavaScript applications that offer a more responsive and improved experience.'
            ),
            React.createElement(
              'p',
              { className: 'blog-post-end' },
              'Use the Model-View-Controller (MVC) pattern, and learn how to manage dependencies inside your application Get an introduction to templating and data binding Learn about loading remote data, Ajax, and cross-domain requests Create realtime applications with WebSockets and Node.js Accept dropped files and upload data with progress indicators Use major frameworks and libraries, including jQuery, Spine, and Backbone Write tests and use the console to debug your applications Get deployment best practices, such as caching and minification'
            )
          ),
          React.createElement(
            'footer',
            null,
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return BlogPostOneComponent;
  }(React.Component);

  BlogTest.BlogPostOneComponent = BlogPostOneComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostTwoComponent = function (_React$Component) {
    _inherits(BlogPostTwoComponent, _React$Component);

    function BlogPostTwoComponent() {
      _classCallCheck(this, BlogPostTwoComponent);

      return _possibleConstructorReturn(this, (BlogPostTwoComponent.__proto__ || Object.getPrototypeOf(BlogPostTwoComponent)).call(this));
    }

    _createClass(BlogPostTwoComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'other-pics tabs-img-2' },
            React.createElement(
              'div',
              { id: 'home-pic-title' },
              'Book Blog'
            )
          ),
          React.createElement(
            'div',
            { className: 'blog-post' },
            React.createElement(
              'h1',
              null,
              'Blog Post Two'
            ),
            React.createElement(
              'h1',
              null,
              'Web Form Design'
            ),
            React.createElement(
              'p',
              { className: 'blog-post-end' },
              'Forms make or break the most crucial online interactions: checkout, registration, and any task requiring information entry. In Web Form Design, Luke Wroblewski draws on original research, his considerable experience at Yahoo! and eBay, and the perspectives of many of the fields leading designers to show you everything you need to know about designing effective and engaging web forms.'
            )
          ),
          React.createElement(
            'footer',
            null,
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return BlogPostTwoComponent;
  }(React.Component);

  BlogTest.BlogPostTwoComponent = BlogPostTwoComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostThreeComponent = function (_React$Component) {
    _inherits(BlogPostThreeComponent, _React$Component);

    function BlogPostThreeComponent() {
      _classCallCheck(this, BlogPostThreeComponent);

      return _possibleConstructorReturn(this, (BlogPostThreeComponent.__proto__ || Object.getPrototypeOf(BlogPostThreeComponent)).call(this));
    }

    _createClass(BlogPostThreeComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'other-pics tabs-img-3' },
            React.createElement(
              'div',
              { id: 'home-pic-title' },
              'Book Blog'
            )
          ),
          React.createElement(
            'div',
            { className: 'blog-post' },
            React.createElement(
              'h1',
              null,
              'Blog Post Three'
            ),
            React.createElement(
              'h1',
              null,
              'Pro Angular JS'
            ),
            React.createElement(
              'p',
              null,
              'AngularJS is the leading framework for building dynamic JavaScript applications that take advantage of the capabilities of modern browsers and devices. AngularJS, which is maintained by Google, brings the power of the Model-View-Controller (MVC) pattern to the client, providing the foundation for complex and rich web apps. It allows you to build applications that are smaller, faster, and with a lighter resource footprint than ever before.'
            ),
            React.createElement(
              'p',
              null,
              'Best-selling author Adam Freeman explains how to get the most from AngularJS. He begins by describing the MVC pattern and the many benefits that can be gained from separating your logic and presentation code. He then shows how you can use AngularJSs features within in your projects to produce professional-quality results. Starting from the nuts-and-bolts and building up to the most advanced and sophisticated features AngularJS is carefully unwrapped, going in-depth to give you the knowledge you need.'
            ),
            React.createElement(
              'p',
              { className: 'blog-post-end' },
              'Each topic is covered clearly and concisely and is packed with the details you need to learn to be truly effective. The most important features are given a no-nonsense in-depth treatment and chapters include common problems and details of how to avoid them.'
            )
          ),
          React.createElement(
            'footer',
            null,
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return BlogPostThreeComponent;
  }(React.Component);

  BlogTest.BlogPostThreeComponent = BlogPostThreeComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostFourComponent = function (_React$Component) {
    _inherits(BlogPostFourComponent, _React$Component);

    function BlogPostFourComponent() {
      _classCallCheck(this, BlogPostFourComponent);

      return _possibleConstructorReturn(this, (BlogPostFourComponent.__proto__ || Object.getPrototypeOf(BlogPostFourComponent)).call(this));
    }

    _createClass(BlogPostFourComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'other-pics tabs-img-4' },
            React.createElement(
              'div',
              { id: 'home-pic-title' },
              'Book Blog'
            )
          ),
          React.createElement(
            'div',
            { className: 'blog-post' },
            React.createElement(
              'h1',
              null,
              'Blog Post Four'
            ),
            React.createElement(
              'h1',
              null,
              'MongoDB in Action'
            ),
            React.createElement(
              'p',
              null,
              'MongoDB in Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.'
            ),
            React.createElement(
              'p',
              { className: 'blog-post-end' },
              'Big data can mean big headaches. MongoDB is a document-oriented database designed to be flexible, scalable, and very fast, even with big data loads. It is built for high availability, supports rich, dynamic schemas, and lets you easily distribute data across multiple servers.'
            )
          ),
          React.createElement(
            'footer',
            null,
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return BlogPostFourComponent;
  }(React.Component);

  BlogTest.BlogPostFourComponent = BlogPostFourComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostFiveComponent = function (_React$Component) {
    _inherits(BlogPostFiveComponent, _React$Component);

    function BlogPostFiveComponent() {
      _classCallCheck(this, BlogPostFiveComponent);

      return _possibleConstructorReturn(this, (BlogPostFiveComponent.__proto__ || Object.getPrototypeOf(BlogPostFiveComponent)).call(this));
    }

    _createClass(BlogPostFiveComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'other-pics tabs-img-5' },
            React.createElement(
              'div',
              { id: 'home-pic-title' },
              'Book Blog'
            )
          ),
          React.createElement(
            'div',
            { className: 'blog-post' },
            React.createElement(
              'h1',
              null,
              'Blog Post Five'
            ),
            React.createElement(
              'h1',
              null,
              'JavaScript Web Applications'
            ),
            React.createElement(
              'p',
              null,
              'Building rich JavaScript applications that bring a desktop experience to the Web requires moving state from the server to the client side\u2014not a simple task. This hands-on book takes proficient JavaScript developers through all the steps necessary to create state-of-the-art applications, including structure, templating, frameworks, communicating with the server, and many other issues.'
            ),
            React.createElement(
              'p',
              null,
              'Throughout the book, you will work with real-world example applications to help you grasp the concepts involved. Learn how to create JavaScript applications that offer a more responsive and improved experience.'
            ),
            React.createElement(
              'p',
              { className: 'blog-post-end' },
              'Use the Model-View-Controller (MVC) pattern, and learn how to manage dependencies inside your application Get an introduction to templating and data binding Learn about loading remote data, Ajax, and cross-domain requests Create realtime applications with WebSockets and Node.js Accept dropped files and upload data with progress indicators Use major frameworks and libraries, including jQuery, Spine, and Backbone Write tests and use the console to debug your applications Get deployment best practices, such as caching and minification'
            )
          ),
          React.createElement(
            'footer',
            null,
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return BlogPostFiveComponent;
  }(React.Component);

  BlogTest.BlogPostFiveComponent = BlogPostFiveComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostSixComponent = function (_React$Component) {
    _inherits(BlogPostSixComponent, _React$Component);

    function BlogPostSixComponent() {
      _classCallCheck(this, BlogPostSixComponent);

      return _possibleConstructorReturn(this, (BlogPostSixComponent.__proto__ || Object.getPrototypeOf(BlogPostSixComponent)).call(this));
    }

    _createClass(BlogPostSixComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'other-pics tabs-img-6' },
            React.createElement(
              'div',
              { id: 'home-pic-title' },
              'Book Blog'
            )
          ),
          React.createElement(
            'div',
            { className: 'blog-post' },
            React.createElement(
              'h1',
              null,
              'Blog Post Six'
            ),
            React.createElement(
              'h1',
              null,
              'JavaScript Web Applications'
            ),
            React.createElement(
              'p',
              null,
              'Building rich JavaScript applications that bring a desktop experience to the Web requires moving state from the server to the client side\u2014not a simple task. This hands-on book takes proficient JavaScript developers through all the steps necessary to create state-of-the-art applications, including structure, templating, frameworks, communicating with the server, and many other issues.'
            ),
            React.createElement(
              'p',
              null,
              'Throughout the book, you will work with real-world example applications to help you grasp the concepts involved. Learn how to create JavaScript applications that offer a more responsive and improved experience.'
            ),
            React.createElement(
              'p',
              { className: 'blog-post-end' },
              'Use the Model-View-Controller (MVC) pattern, and learn how to manage dependencies inside your application Get an introduction to templating and data binding Learn about loading remote data, Ajax, and cross-domain requests Create realtime applications with WebSockets and Node.js Accept dropped files and upload data with progress indicators Use major frameworks and libraries, including jQuery, Spine, and Backbone Write tests and use the console to debug your applications Get deployment best practices, such as caching and minification'
            )
          ),
          React.createElement(
            'footer',
            null,
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return BlogPostSixComponent;
  }(React.Component);

  BlogTest.BlogPostSixComponent = BlogPostSixComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var CategoriesComponent = function (_React$Component) {
    _inherits(CategoriesComponent, _React$Component);

    function CategoriesComponent() {
      _classCallCheck(this, CategoriesComponent);

      return _possibleConstructorReturn(this, (CategoriesComponent.__proto__ || Object.getPrototypeOf(CategoriesComponent)).call(this));
    }

    _createClass(CategoriesComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'Categories ... more information coming soon'
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            { className: 'tenLinks' },
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return CategoriesComponent;
  }(React.Component);

  BlogTest.CategoriesComponent = CategoriesComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var MainPageComponent = function (_React$Component) {
    _inherits(MainPageComponent, _React$Component);

    function MainPageComponent() {
      _classCallCheck(this, MainPageComponent);

      return _possibleConstructorReturn(this, (MainPageComponent.__proto__ || Object.getPrototypeOf(MainPageComponent)).call(this));
    }

    _createClass(MainPageComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'home-pic' },
            React.createElement(
              'div',
              { id: 'home-pic-title' },
              'Book Blog'
            )
          ),
          React.createElement(
            'section',
            { id: 'spacing' },
            React.createElement(
              'div',
              { id: 'intro-main' },
              React.createElement(
                'h1',
                null,
                'Welcome to the Book Review Blog'
              ),
              React.createElement(
                'p',
                null,
                'Read the from the recent blog posts on some of the most interesting stories, and characters out there.'
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'read-title-main' },
            React.createElement(
              'h1',
              null,
              'Blog Posts'
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostOne' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-1' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'one'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostTwo' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-2' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'two'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Forms make or break the most...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Web Form Design'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostThree' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-3' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'three'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFour' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-4' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'four'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Pro Angular JS'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' MongoDB in Action'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-5' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'five'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostSix' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-6' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'six'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          '// ',
          React.createElement(
            'div',
            { id: 'read-more-main' },
            '//   ',
            React.createElement(
              'h1',
              null,
              'Read more coming soon ...'
            ),
            '// '
          ),
          React.createElement(
            'div',
            { id: 'archive-main' },
            React.createElement(
              'h1',
              null,
              'Archive'
            ),
            React.createElement(
              'ul',
              { id: 'archive-main-list' },
              React.createElement(
                ReactRouter.Link,
                { to: '/Archive' },
                React.createElement(
                  'li',
                  null,
                  '2017'
                )
              ),
              React.createElement(
                ReactRouter.Link,
                { to: '/Archive' },
                React.createElement(
                  'li',
                  null,
                  '2016'
                )
              ),
              React.createElement(
                ReactRouter.Link,
                { to: '/Archive' },
                React.createElement(
                  'li',
                  null,
                  '2015'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'newsletter-main' },
            React.createElement(
              'div',
              null,
              React.createElement(
                'form',
                null,
                React.createElement(
                  'h1',
                  null,
                  'Get Newsletter'
                ),
                React.createElement('input', { type: 'text' }),
                React.createElement(
                  'button',
                  null,
                  'sign up'
                )
              )
            )
          ),
          React.createElement(
            'footer',
            null,
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return MainPageComponent;
  }(React.Component);

  BlogTest.MainPageComponent = MainPageComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var MyBooksComponent = function (_React$Component) {
    _inherits(MyBooksComponent, _React$Component);

    function MyBooksComponent() {
      _classCallCheck(this, MyBooksComponent);

      return _possibleConstructorReturn(this, (MyBooksComponent.__proto__ || Object.getPrototypeOf(MyBooksComponent)).call(this));
    }

    _createClass(MyBooksComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'My Books ... more information coming soon'
          ),
          React.createElement(
            'p',
            null,
            'Search from the Goodreads database for one of your favorite books.'
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            { className: 'tenLinks' },
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return MyBooksComponent;
  }(React.Component);

  BlogTest.MyBooksComponent = MyBooksComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var NewReleasesComponent = function (_React$Component) {
    _inherits(NewReleasesComponent, _React$Component);

    function NewReleasesComponent() {
      _classCallCheck(this, NewReleasesComponent);

      return _possibleConstructorReturn(this, (NewReleasesComponent.__proto__ || Object.getPrototypeOf(NewReleasesComponent)).call(this));
    }

    _createClass(NewReleasesComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'New Releases ... more information coming soon'
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            { className: 'tenLinks' },
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return NewReleasesComponent;
  }(React.Component);

  BlogTest.NewReleasesComponent = NewReleasesComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var PopularCommentedComponent = function (_React$Component) {
    _inherits(PopularCommentedComponent, _React$Component);

    function PopularCommentedComponent() {
      _classCallCheck(this, PopularCommentedComponent);

      return _possibleConstructorReturn(this, (PopularCommentedComponent.__proto__ || Object.getPrototypeOf(PopularCommentedComponent)).call(this));
    }

    _createClass(PopularCommentedComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'Popular Commented'
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostOne' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-1' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'one'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostTwo' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-2' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'two'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Forms make or break the most...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Web Form Design'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostThree' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-3' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'three'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFour' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-4' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'four'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Pro Angular JS'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' MongoDB in Action'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-5' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'five'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostSix' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-6' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'six'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostThree' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-3' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'three'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFour' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-4' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'four'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-5' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'five'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostSix' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-6' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'six'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            { className: 'tenLinks' },
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return PopularCommentedComponent;
  }(React.Component);

  BlogTest.PopularCommentedComponent = PopularCommentedComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var PopularMainComponent = function (_React$Component) {
    _inherits(PopularMainComponent, _React$Component);

    function PopularMainComponent() {
      _classCallCheck(this, PopularMainComponent);

      return _possibleConstructorReturn(this, (PopularMainComponent.__proto__ || Object.getPrototypeOf(PopularMainComponent)).call(this));
    }

    _createClass(PopularMainComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'Welcome to the most Popular sections'
          ),
          React.createElement(
            'section',
            { id: 'spacing' },
            React.createElement(
              'div',
              { id: 'intro-main' },
              React.createElement(
                'h1',
                null,
                'Most Viewed, Most Shared, and Most Commented'
              ),
              React.createElement(
                'p',
                null,
                'Read the from the recent blog posts on some of the most interesting stories, and characters out there.'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PopularCommented' },
              React.createElement(
                'div',
                { className: 'tabs-popular tabs-one-popular tabs-img-1' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'one'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PopularShared' },
              React.createElement(
                'div',
                { className: 'tabs-popular tabs-two-popular tabs-img-2' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'two'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PopularViewed' },
              React.createElement(
                'div',
                { className: 'tabs-popular tabs-img-3' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'three'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom-popular tabs-one-popular' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                'Most Commented'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom-popular tabs-two-popular' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                'Most Shared'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom-popular' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                'Most Viewed'
              )
            )
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            null,
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return PopularMainComponent;
  }(React.Component);

  BlogTest.PopularMainComponent = PopularMainComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var PopularSharedComponent = function (_React$Component) {
    _inherits(PopularSharedComponent, _React$Component);

    function PopularSharedComponent() {
      _classCallCheck(this, PopularSharedComponent);

      return _possibleConstructorReturn(this, (PopularSharedComponent.__proto__ || Object.getPrototypeOf(PopularSharedComponent)).call(this));
    }

    _createClass(PopularSharedComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'Popular Shared'
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostOne' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-1' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'one'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostTwo' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-2' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'two'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Forms make or break the most...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Web Form Design'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostThree' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-3' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'three'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFour' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-4' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'four'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Pro Angular JS'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' MongoDB in Action'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-5' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'five'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostSix' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-6' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'six'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostThree' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-3' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'three'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFour' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-4' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'four'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-5' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'five'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostSix' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-6' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'six'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            { className: 'tenLinks' },
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return PopularSharedComponent;
  }(React.Component);

  BlogTest.PopularSharedComponent = PopularSharedComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var PopularViewedComponent = function (_React$Component) {
    _inherits(PopularViewedComponent, _React$Component);

    function PopularViewedComponent() {
      _classCallCheck(this, PopularViewedComponent);

      return _possibleConstructorReturn(this, (PopularViewedComponent.__proto__ || Object.getPrototypeOf(PopularViewedComponent)).call(this));
    }

    _createClass(PopularViewedComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'Popular Viewed'
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostOne' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-1' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'one'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostTwo' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-2' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'two'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Forms make or break the most...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Web Form Design'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostThree' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-3' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'three'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFour' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-4' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'four'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Pro Angular JS'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' MongoDB in Action'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-5' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'five'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostSix' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-6' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'six'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostThree' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-3' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'three'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFour' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-4' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'four'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                'div',
                { className: 'tabs tabs-one tabs-img-5' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'five'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostSix' },
              React.createElement(
                'div',
                { className: 'tabs tabs-img-6' },
                React.createElement(
                  'div',
                  { className: 'blog-pic-title' },
                  'six'
                ),
                React.createElement(
                  'div',
                  { className: 'blog-pic-summary' },
                  'Building rich JavaScript applications that bring a desktop experience to the Web requires...'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom tabs-one' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            ),
            React.createElement(
              'div',
              { className: 'tabs-bottom' },
              React.createElement(
                'h1',
                { className: 'center-blog-info' },
                '11/15/16 ',
                React.createElement(
                  'span',
                  { className: 'white' },
                  ' | '
                ),
                ' Review of Javascript Web Applications'
              )
            )
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            { className: 'tenLinks' },
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return PopularViewedComponent;
  }(React.Component);

  BlogTest.PopularViewedComponent = PopularViewedComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var RecentPostsComponent = function (_React$Component) {
    _inherits(RecentPostsComponent, _React$Component);

    function RecentPostsComponent() {
      _classCallCheck(this, RecentPostsComponent);

      return _possibleConstructorReturn(this, (RecentPostsComponent.__proto__ || Object.getPrototypeOf(RecentPostsComponent)).call(this));
    }

    _createClass(RecentPostsComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { id: 'eyebrow-nav' },
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/About' },
                    'About'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/MyBooks' },
                    'My books'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'main-nav' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                React.createElement('div', { className: 'logo' })
              ),
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/NewReleases' },
                    'New Releases'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/PopularMain' },
                    'Popular'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Categories' },
                    'Categories'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/RecentPosts' },
                    'Recent Posts'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/Author' },
                    'Author interviews'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'archive-title' },
            'Recent Posts ... more information coming soon'
          ),
          React.createElement('div', { id: 'spacing' }),
          React.createElement(
            'footer',
            { className: 'tenLinks' },
            React.createElement(
              'p',
              null,
              '\xA9 copyright 2017 BOOK BLOG'
            )
          )
        );
      }
    }]);

    return RecentPostsComponent;
  }(React.Component);

  BlogTest.RecentPostsComponent = RecentPostsComponent;
})();
"use strict";

if (window.BlogTest === undefined) {
      window.BlogTest = {};
}

(function () {
      var mountNode = document.querySelector('#react-root');

      var Router = ReactRouter.Router;
      var Route = ReactRouter.Route;
      var IndexRoute = ReactRouter.IndexRoute;

      var router = React.createElement(
            Router,
            { history: ReactRouter.hashHistory },
            React.createElement(Route, { path: "/", component: BlogTest.MainPageComponent }),
            React.createElement(Route, { path: "/Archive", component: BlogTest.ArchiveComponent }),
            React.createElement(Route, { path: "/PostOne", component: BlogTest.BlogPostOneComponent }),
            React.createElement(Route, { path: "/PostTwo", component: BlogTest.BlogPostTwoComponent }),
            React.createElement(Route, { path: "/PostThree", component: BlogTest.BlogPostThreeComponent }),
            React.createElement(Route, { path: "/PostFour", component: BlogTest.BlogPostFourComponent }),
            React.createElement(Route, { path: "/PostFive", component: BlogTest.BlogPostFiveComponent }),
            React.createElement(Route, { path: "/PostSix", component: BlogTest.BlogPostSixComponent }),
            React.createElement(Route, { path: "/PopularShared", component: BlogTest.PopularSharedComponent }),
            React.createElement(Route, { path: "/PopularCommented", component: BlogTest.PopularCommentedComponent }),
            React.createElement(Route, { path: "/PopularViewed", component: BlogTest.PopularViewedComponent }),
            React.createElement(Route, { path: "/PopularMain", component: BlogTest.PopularMainComponent }),
            React.createElement(Route, { path: "/About", component: BlogTest.AboutComponent }),
            React.createElement(Route, { path: "/Author", component: BlogTest.AuthorComponent }),
            React.createElement(Route, { path: "/Categories", component: BlogTest.CategoriesComponent }),
            React.createElement(Route, { path: "/MyBooks", component: BlogTest.MyBooksComponent }),
            React.createElement(Route, { path: "/NewReleases", component: BlogTest.NewReleasesComponent }),
            React.createElement(Route, { path: "/RecentPosts", component: BlogTest.RecentPostsComponent })
      );

      ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
