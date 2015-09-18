function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      node_modules_lasso_taglib_page_tag_js = __renderer(require("lasso/taglib/page-tag")),
      __tag = __helpers.t,
      node_modules_lasso_taglib_head_tag_js = __renderer(require("lasso/taglib/head-tag")),
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa,
      node_modules_lasso_taglib_body_tag_js = __renderer(require("lasso/taglib/body-tag"));

  return function render(data, out) {
    __tag(out,
      node_modules_lasso_taglib_page_tag_js,
      {
        "packagePath": "./browser.json",
        "flags": [data.flag],
        "dirname": __dirname,
        "filename": __filename
      });
    __tag(out,
      node_modules_lasso_taglib_head_tag_js,
      {});

    out.w('<h1>Hello ' +
      escapeXml(data.name) +
      '!<h1>');

    if (notEmpty(data.colors)) {
      out.w('<ul>');

      forEach(data.colors, function(color) {
        out.w('<li style="color: ' +
          escapeXmlAttr(color) +
          '">' +
          escapeXml(color) +
          '</li>');
      });

      out.w('</ul>');
    }
    else {
      out.w('<div>No colors!</div>');
    }
    __tag(out,
      node_modules_lasso_taglib_body_tag_js,
      {});

    out.w('</h1></h1>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);