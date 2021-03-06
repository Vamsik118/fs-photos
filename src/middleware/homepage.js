/*
  Copyright 2017 Linux Academy
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

module.exports = (req, res) => {
  const renderHomepage = ctx => res.render('index', Object.assign(
    { images: res.locals.images },
    ctx
  ));


  if (req.query && req.query.err) {
    return renderHomepage({ err: req.query.err });
  }

  if (res.locals.error) {
    return renderHomepage({ err: JSON.stringify({
      code: res.locals.error.code,
      message: res.locals.error.message,
    }) });
  }

  renderHomepage();
};
