'use strict';

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
    function(text) {
      if(text.includes('yt')){
        text = text.substr(2);
        chrome.tabs.update({url:'https://www.youtube.com/results?search_query=' + encodeURIComponent(text)});
      }
      else if(text.includes('wiki')){
          text = text.substr(4);
          chrome.tabs.update({url:'https://en.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(text) + '&go=Go&ns0=1'});
      }
      else if(text.includes('sof')){
          text = text.substr(3);
          chrome.tabs.update({url:'https://stackoverflow.com/search?q=' + text + '&s=fa0bbd88-7118-4cce-9467-56cfb461c53e'})
      }
    });