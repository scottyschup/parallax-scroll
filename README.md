## Parallax Scroll jQuery Plugin

Use this plugin to add a little touch of animation to your site!

# Usage

Simplest usage:

(Preliminaries: make sure you have jQuery included in your project directory and download the parallaxScroll.js file into your project directory as well.)

1. Create a container for your content with an `id`.

  ```
  <div id="p-scroll-1">
    <h1>Content Title</h1>
    <p>Content paragraph one.</p>
    <ul>
      <li>List item of content<li>
      <li>Another</li>
      <li>And another</li>
      <li>So many list items</li>
      <li>So many list items</li>
      <li>So many list items</li>
      <li>So many list items</li>
      <li>So many list items</li>
    </ul>
    <p>Here's another paragraph.</p>
  </div>
  ```

2. Include the `parallaxScroll.js` file in the `head` of your `html` file
 __AFTER__ your jQuery `script` tag.

  ```
  <script src="jquery-2.1.3.min.js" type="text/javascript"></script>
  <script src="parallaxScroll.js" type="text/javascript"></script>
  ```

3. At the very end of the body section, include the following:

  ```
  <script>
    $(function () {
      new jQPS({
        containerId: "p-scroll-1",
        backgroundImgUrl: "path/to/your-background-image.jpg"
      });
    });
  </script>
  ```

4. See comments in the provided index.html file for additional features.

5. Create an issue [here][gh-issues] or [contact Scott][email] with any questions, comments or concerns.

[gh-issues]: https://github.com/scottyschup/parallax-scroll/issues
[email]: mailto:ssschupbach@gmail.com
