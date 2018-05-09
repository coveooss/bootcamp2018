# Bootcamp 2018 Search UI, PART 1

### New tab.

You must add a new component (CoveoTab) that will allow you to filter on YouTube videos. The caption for this tab must be "YouTube".

See [the documentation on the Tab component](https://coveo.github.io/search-ui/components/tab.html#options.expression) to see the list of available configuration options.

    Hint : There is already a tab for "All Content". You must add the new component after the existing one. The "All Content" does not filter on anything, and effectively shows "All Content" in the index.

    Hint #2 : YouTube videos all possess the same value ( "youtubevideo" ) for the field "@filetype". Thus, the query expression that would allow you to filter on YouTube videos in the index would be @filetype==youtubevideo.
    
    Hint #3 : The "data-id" attribute on this component is *mandatory* !

### New facet.

You must add a new component (CoveoFacet) that will allow to filter on authors of YouTube videos. This new facet must only be displayed in the new "YouTube" tab that was just added, and must not appear in the "All Content" tab.

See [the documentation on the Facet component](https://coveo.github.io/search-ui/components/facet.html) to see the list of available configuration options.

    Hint : The field that allows to show authors in the index is "@author".
    
    Hint #2 : On all Coveo components, it is possible to use the "data-tab" attribute to target in which tab(s) the component should be available.

This behaviour is described in the documentation for the [tab component](https://coveo.github.io/search-ui/components/tab.html)
        
### New slider facet.

You must add a new component (FacetSlider) with a mini graph to see the repartition of views on all YouTube videos. 

This facet must use the field `@ytviewcount`, must begin at the value `0` and must end at the value `5000`.

There must be 10 steps in your graph. This is done by using the `data-graph-steps` option.

Your component should be a `rangeSlider`.

See the [documentation](https://coveo.github.io/search-ui/components/facetslider.html)
    
### Select a facet value automatically through code.

Add a JavaScript function that will allow you to select the value `pdf` in the `File Type` facet.

    Hint : To get a reference to any component instance, you can use the Coveo.get(an HTML element) function available globally. 
    
    Something like Coveo.get(document.querySelector( [... a selector for the correct facet in the page ...] )) would return the component instance bound to the specified HTML element.

[Documentation on querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

    Hint #2 : Most component offer methods to interact with them. For example, myFacetInstance.getSelectedValues() would return all selected values in the facet.

[See this for selectValue](https://coveo.github.io/search-ui/components/facet.html#selectvalue)

    Hint #3 : You cannot interact with component instance before they have been initialized, or you will get error message like "Cannot read property 'selectValue' of undefined". You can do so after the "init" function has resolved. 
    
    Coveo.init(document.body).then(()=> { [... do something here ...] });