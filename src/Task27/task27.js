//Task27
//Tabs - no tests in Test folder

//function asTabs uses the node from its argument node
// to create a set of buttons (tabs) that display only
// elements corresponding to it (related via attribute
// data-tabname). The selected tab is highlighted with
// YELLOW colour
function asTabs(node) {
    var tabs = [];
    for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        if (child.nodeType === document.ELEMENT_NODE) {
            tabs.push(child);
        }
    }
    var tabList = document.createElement('div');
    tabs.forEach(function(tab, j) {
        var but = document.createElement('button');
        but.textContent = tab.getAttribute('data-tabname');
        but.addEventListener('click', function(){
            selectTab(j);
        });
        tabList.appendChild(but);
    });
    node.insertBefore(tabList, node.firstChild);
    function selectTab(n) {
        tabs.forEach(function(tab, k) {
            if (k === n) {
                tab.style.display = '';
            } else {
                tab.style.display = 'none';
            }
        });
        for (var l = 0; l < tabList.childNodes.length; l++) {
            if (l === n) {
                tabList.childNodes[l].style.background = 'yellow';
            } else {
                tabList.childNodes[l].style.background = '';
            }
        }
    }
    selectTab(1);
}
