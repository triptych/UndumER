/** html template for substitution **/
/** convert this to YUI.add **/



udrtemp = {
 html: 
'<div id="toolbar">\
<h1>Undum</h1>\
<div class="nav">\
<a href="#" class="button" id="menu-button">Menu</a>\
</div>\
   <ul id="menu">\
      <li><a href="#title, #content_wrapper">Story</a></li>\
      <li><a href="#character_panel">Character</a></li>\
      <li><a href="#info_panel">Info</a></li>\
    </ul>\
</div>\
\
  <div id="page">\
\
      <div id="tools_wrapper">\
        <div id="info_panel" class="tools left">\
          <h1>Undum</h1>\
          <p>\
            Undum is a pure client-side game framework for narrative\
            interactive fiction. It is designed for HTML&#x200A;5 and\
            CSS&#x200A;3. You can read more and download the source\
            code <a href="http://github.com/idmillington/undum">here</a>.\
          </p>\
\
          <div class="buttons">\
            <button id="save">Save</button><button id="erase">Erase</button>\
          </div>\
        </div>\
\
        <div id="character_panel" class="tools right">\
          <h1>Character</h1>\
          <div id="character">\
            <div id="character_text">\
              <div id="character_text_content"></div>\
            </div>\
            <div id="qualities"></div>\
          </div>\
        </div>\
      </div>\
\
      <div id="mid_panel">\
        <div id="title">\
          <div class="label">\
            <h1>{title}</h1>\
            <h2>by {author}</h2>\
\
\
            <p class="click_message">click to begin</p>\
          </div>\
        </div>\
\
        <div id="content_wrapper">\
          <div id="content">\
          </div>\
          <a name="end_of_content"></a>\
        </div>\
\
        <div id="legal">\
          <p>Content and additional software and design &copy; 2010 IDM.</p>\
\
          <p>\
            Parts of the software and design &copy; 2010 IDM. Undum is\
            available\
            <a href="http://github.com/idmillington/undum">here</a>.\
            Derivative works must include this copyright line and link.\
          </p>\
        </div>\
      </div>\
    </div> \
\
\
    <div id="ui_library">\
      <div id="quality" class="quality">\
        <span class="name" data-attr="name"></span>\
        <span class="value" data-attr="value"></span>\
      </div>\
\
      <div id="quality_group" class="quality_group">\
        <h2 data-attr="title"></h2>\
        <div class="qualities_in_group">\
        </div>\
      </div>\
\
      <div id="progress_bar" class="progress_bar">\
        <span class="name" data-attr="name"></span>\
        <span class="value" data-attr="value"></span>\
        <div class="progress_bar_track">\
          <div class="progress_bar_color" data-attr="width">\
          </div>\
        </div>\
        <span class="left_label" data-attr="left_label"></span>\
        <span class="right_label" data-attr="right_label"></span>\
      </div>\
\
      <hr id="turn_separator">\
    </div>\
\
\
    <div id="content_library">\
      <div id="s_rooms">\
        <h1>Situations</h1>\
        <p>\
          In Undum, all interaction takes place in a situation. You\
          can think of it either as a "Room" in traditional\
          interactive fiction (although it is less flexible than\
          that), or as a "Page" in a Choose Your Own Adventure book\
          (though it is more flexible than that). At any point in\
          time, the character is in exactly one situation, and that\
          situation is responsible for everything that happens to\
          them. Situations are chunks of code that generate the output\
          you are reading here. For example, this text was generated\
          by the <em>enter</em> method of the first situation.\
        </p>\
        <p class="transient">\
          Lets <a href="todo">move on again</a>.\
        </p>\
      </div>\
\
      <div id="s_saving">\
        <h1>Saving and Loading</h1>\
        <p>The only piece of the UI we havent talked about is the\
          "Save" and "Erase" buttons on the left panel. These are only\
          visible if your browser supports client-side data\
          storage. Clicking "Save" stores your game, so you can pick\
          it up again later. There is currently no "Load" button, the\
          game loads when the page loads. There is also no way to save\
          multiple games, and select which one you want to play. These\
          are both things Id like to change in the future.\
        </p>\
        <p>\
          Potentially your game could generate huge amounts of\
          text. And that would be difficult to store client side\
          (there are unpredictable limits), especially when we move\
          towards having multiple save files. So instead Undum saves\
          your character as the list of links you clicked. Loading a\
          save-file consists of playing through your game again,\
          quickly. This is a beneficial approach for debugging too. It\
          means when youre polishing and correcting typos, you can\
          save and load the game and scroll through the transcript to\
          see your corrections. If we saved the text, your save file\
          would have the error in it and youd have to manually replay\
          the game to see the correction.\
        </p>\
        <p class="transient">\
          Time for the <a href="last">last section</a>.\
        </p>\
      </div>\
    </div>'


};

