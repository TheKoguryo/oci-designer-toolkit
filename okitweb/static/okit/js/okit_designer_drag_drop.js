console.log('Loaded Drag & Drop Javascript');

/*
** Define Connector Drag & Drop functions point manipulation code.
 */
//var okitcanvasSVGPoint = okitcanvas.createSVGPoint();
//var okitcanvasScreenCTM = okitcanvas.getScreenCTM();
var connectorStartElement = null;
var connectorStartXLeft = 0;
var connectorStartYTop = 0;
var connectorContainerSVGPoint = null;
var connectorContainerScreenCTM = null;

/*
** Define Dynamic Add/Update function
 */

var asset_add_functions = {};
var asset_update_functions = {};
var asset_delete_functions = {};

function addAssetToDropTarget(title, target_id) {
    //console.log('addAssetToDropTarget - Title : ' + title);
    //console.log('addAssetToDropTarget - Target Id : ' + target_id);
    //console.log('addAssetToDropTarget - Add Functions : ' + JSON.stringify(asset_add_functions));
    window[asset_add_functions[title]](target_id);
}

function updateAssetTarget(title, source_type, source_id, target_id) {
    window[asset_update_functions[title]](source_type, source_id, target_id);
}

/*
** Drag & Drop Handlers
 */

/*
** Define palette Drag & Drop functions
 */

var palatte_source_type = '';
var asset_drop_targets = {};
var asset_connect_targets = {};

function setDragDropIcon(e) {
    var type = e.target.getAttribute('data-type');
    if (asset_drop_targets[palatte_source_type].indexOf(type) >= 0) {
        e.dataTransfer.dropEffect = 'copy';  // See the section on the DataTransfer object.
    } else {
        e.dataTransfer.effectAllowed = "none";
        e.dataTransfer.dropEffect = "none";
    }
}

function handleDragStart(e) {
    console.log('Drag Start');
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/plain', this.title);
    palatte_source_type = this.title;
    //e.dataTransfer.setData('text/html', this.src);
    console.log(this.title);
    //console.log(this.src);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    setDragDropIcon(e);
    return false;
}

function handleDragEnter(e) {
    // this / e.target is the current hover target.
    //this.classList.add('over');
    setDragDropIcon(e);
}

function handleDragLeave(e) {
    //this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
    console.log('Drag Drop (Dynamic)');
    // this/e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    //this.innerHTML = e.dataTransfer.getData('text/html');
    var title = e.dataTransfer.getData('text/plain');
    var type = e.target.getAttribute('data-type');
    var target_id = e.target.id;
    // Call Add Function
    addAssetToDropTarget(title, target_id)

    this.classList.remove('over');  // this / e.target is previous target element.

    return false;
}

function handleDragEnd(e) {
    // this/e.target is the source node.
    console.log('Drag End');

    [].forEach.call(cols, function (col) {
        col.classList.remove('over');
    });
}

/*
** SVG Psudo Drag & Drop
 */

function handleConnectorDrag(e) {
    if (connectorStartElement) {
        //console.log('Connector Drag : ' + getMousePosition(e).x + ' - ' + getMousePosition(e).y);
        var mousePos = getMousePosition(d3.event);
        d3.select("#Connector")
            .attr("x2", mousePos.x)
            .attr("y2", mousePos.y);
    }
}

const left_click = 1;
const middle_click = 2;
const right_click = 3;

function handleConnectorDragStart() {
    console.log('Connector Drag Start');
    if (d3.event.which == left_click) {
        var thisid = d3.select(this).attr('id');
        console.log('This Id : ' + thisid);
        var source_type = d3.select(this).attr('data-type');
        if (asset_connect_targets.hasOwnProperty(source_type) && asset_connect_targets[source_type].length > 0) {
            // Set Start Element to know we are dragging
            connectorStartElement = this;
            var parentid = d3.select(this).attr('data-parentid');
            var parent_svg = document.getElementById(parentid + "-svg");

            console.log('Connector Drag Start Parent Id : ' + parentid);
            console.log('Connector Drag Start Id : ' + d3.select(this).attr('id'));
            console.log('Connector Drag Start data-connector-start-y : ' + d3.select(this).attr('data-connector-start-y'));
            console.log('Connector Drag Start data-connector-start-x : ' + d3.select(this).attr('data-connector-start-x'));

            // Define SVG position manipulation variables
            connectorContainerSVGPoint = parent_svg.createSVGPoint();
            connectorContainerScreenCTM = parent_svg.getScreenCTM();
            connectorContainerSVGPoint.x = d3.select(this).attr('data-connector-start-x');
            connectorContainerSVGPoint.y = d3.select(this).attr('data-connector-start-y');

            // Convert to SVG Relative positioning
            var svgrelative = connectorContainerSVGPoint.matrixTransform(connectorContainerScreenCTM.inverse());
            connectorStartXLeft = svgrelative.x;
            connectorStartYTop = svgrelative.y;

            // Start Drawing line
            svg = d3.select('#' + parentid + "-svg");
            svg.append('line')
                .attr("id", "Connector")
                .attr("x1", connectorStartXLeft)
                .attr("y1", connectorStartYTop)
                .attr("x2", connectorStartXLeft)
                .attr("y2", connectorStartYTop)
                .attr("stroke-width", "2")
                .attr("stroke-dasharray", "3, 3")
                .attr("stroke", "darkgray");
        } else {
            console.log('Not a drag source : ' + source_type);
            connectorStartElement = null;
            connectorStartXLeft = 0;
            connectorStartYTop = 0;
            d3.selectAll("#Connector").remove();
        }
        // Hide Context Menu
        $("#context-menu").addClass("hidden");
    }
}


function handleConnectorDragEnter(e) {
    if (connectorStartElement) {
        //console.log('Connector Drag Enter : ' + e.target.id + ' - ' + e.target.getAttribute('data-type'));
    }
}

function handleConnectorDragLeave(e) {
    if (connectorStartElement) {
        //console.log('Connector Drag Leave : ' + e.target.id + ' - ' + e.target.getAttribute('data-type'));
    }
}

function handleConnectorDrop(e) {
    console.log('Connector Drop');
    var thisid = d3.select(this).attr('id');
    console.log('This Id : ' + thisid);
    if (connectorStartElement) {
        var sourceType = connectorStartElement.getAttribute('data-type');
        var destinationType = d3.select(this).attr('data-type');
        var parentid = d3.select(this).attr('data-parentid');
        var sourceid = connectorStartElement.getAttribute('data-okit-id');
        var id = d3.select(this).attr('data-okit-id');
        var connector_source_id = connectorStartElement.getAttribute('data-connector-id');
        var connector_destination_id = d3.select(this).attr('data-connector-id');

        console.log('Connector Source Type : ' + sourceType);
        console.log('Connector Destination Type : ' + destinationType);
        console.log('Connector Allowed : ' + JSON.stringify(asset_connect_targets));

        console.log('Connector Drag End Parent Id : ' + parentid);
        console.log('Connector Drag Start Id : ' + sourceid);
        console.log('Connector Drag End Id : ' + d3.select(this).attr('id'));
        console.log('Connector Drag End data-connector-end-y : ' + d3.select(this).attr('data-connector-end-y'));
        console.log('Connector Drag End data-connector-end-x : ' + d3.select(this).attr('data-connector-end-x'));
        console.log('Connector Source Id : ' + connector_source_id);
        console.log('Connector Destination Id : ' + connector_destination_id);

        // Check is Connection of
        if (asset_connect_targets[sourceType].indexOf(destinationType) >= 0) {
            updateAssetTarget(destinationType, sourceType, sourceid, id)
            console.log('Creating Connector Line (' + sourceType + ') - (' + destinationType + ')');
            console.log('Creating Connector Line (' + sourceid + ') - (' + id + ')');
            connectorContainerSVGPoint.x = d3.select(this).attr('data-connector-end-x');
            connectorContainerSVGPoint.y = d3.select(this).attr('data-connector-end-y');
            var svgrelative = connectorContainerSVGPoint.matrixTransform(connectorContainerScreenCTM.inverse());
            svg = d3.select("#" + parentid + '-svg');
            svg.append('line')
                .attr("id", generateConnectorId(sourceid, id))
                .attr("x1", connectorStartXLeft)
                .attr("y1", connectorStartYTop)
                .attr("x2", svgrelative.x)
                .attr("y2", svgrelative.y)
                .attr("stroke-width", "2")
                .attr("stroke", "black");
        }
    }

    connectorStartElement = null;
    connectorStartXLeft = 0;
    connectorStartYTop = 0;
    d3.selectAll("#Connector").remove();
}

function getMousePosition(evt) {
    if (evt.touches) { evt = evt.touches[0]; }
    return {
        x: (evt.clientX - connectorContainerScreenCTM.e) / connectorContainerScreenCTM.a,
        y: (evt.clientY - connectorContainerScreenCTM.f) / connectorContainerScreenCTM.d
    };
}

function handleContextMenu() {
    let thisid = d3.select(this).attr('id');
    console.log('Right Click on ' + thisid);
    d3.event.preventDefault();
    d3.event.stopPropagation();
    //alert('Right Click');
    let element = document.getElementById("context-menu");
    element.classList.toggle("hidden");
    element.style.top =  d3.event.clientY + 'px';
    element.style.left = d3.event.clientX + 'px';
}

