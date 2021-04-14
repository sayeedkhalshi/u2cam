import elementArrayList from './elementArrayList';
import getAllElements from './getAllElements';

const iframeFunction = () => {
  if (document.getElementById('edit-frame')) {
    //grab iframe document
    var iframe = document.getElementById('edit-frame');
    var innerDoc = iframe.contentDocument
      ? iframe.contentDocument
      : iframe.contentWindow.document;
    //if iframe oaded
    if (innerDoc.readyState == 'complete') {
      //show all the elements
      getAllElements(innerDoc);
      // show all the elements class
      // show tree heirarchy of nested elements

      //create tooltip
      const tooltip = document.createElement('p');
      tooltip.style.cssText =
        'top: 0;left: 0;opacity:0;position: absolute;z-index: 1000;width:auto;padding:4px;color: #444;background: white;';

      //set id for tooltip
      const text = document.createTextNode('Double click to edit!');
      tooltip.setAttribute('id', 'tooltip-inside-editor');
      tooltip.appendChild(text);
      const iframeBody = innerDoc.getElementsByTagName('body')[0];
      iframeBody.appendChild(tooltip);

      const tooltipId = innerDoc.getElementById('tooltip-inside-editor');
      //tooltip follow mouse function
      function fn(e) {
        tooltipId.style.opacity = 1;
        tooltipId.style.left = e.pageX + 'px';
        tooltipId.style.top = e.pageY + 'px';
      }

      innerDoc.addEventListener('mousemove', fn, false);

      const clicked = (elementArray, element) => {
        for (let i = 0; i < elementArray.length; i++) {
          elementArray[i].addEventListener('dblclick', () => {
            //get file path
            var path = innerDoc.location.pathname;
            var page = path.split('/').pop();

            //set other editable to non editable/normal
            const editables = innerDoc.querySelectorAll('[contenteditable]');
            for (var j = 0; j < editables.length; j++) {
              editables[j].setAttribute('contenteditable', 'false');
            }

            //change innerhtml of tooltip
            tooltipId.innerHTML = `Clicked #${i} &lt;${element}&gt; of ${page}`;

            //make content editable
            elementArray[i].setAttribute('contenteditable', 'true');
          });
        }
      };

      // run clicked function for each tag
      elementArrayList.forEach((element) => {
        if (innerDoc.getElementsByTagName(element)) {
          const elementArray = innerDoc.getElementsByTagName(element);
          clicked(elementArray, element);
        }
      });
    }
  }
};

export default iframeFunction;