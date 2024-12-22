/* global hexo */

'use strict';

const postButton = require('./button')(hexo);

hexo.extend.tag.register('button', postButton);
hexo.extend.tag.register('btn', postButton);

const postNote = require('./note')(hexo);

hexo.extend.tag.register('note', postNote, true);
hexo.extend.tag.register('subnote', postNote, true);

const groupPicture = require('./group-pictures')(hexo);

hexo.extend.tag.register('grouppicture', groupPicture, true);
hexo.extend.tag.register('gp', groupPicture, true);
