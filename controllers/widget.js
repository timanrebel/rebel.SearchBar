_.extend(this, {
    value: null,

	construct: function(config) {
        $.getView().applyProperties({
            barColor: config.barColor
        });
	}
});

function onFocus(evt) {
	$.getView().setShowCancel(true);

    $.trigger(evt.type, evt);
}

function onBlur(evt) {
    $.trigger(evt.type, evt);
}

function onCancel(evt) {
	$.getView().setShowCancel(false);
	$.getView().blur();

    $.trigger(evt.type, evt);
}

function onChange(evt) {
    $.value = $.getView().value;

    $.trigger(evt.type, evt);
}
