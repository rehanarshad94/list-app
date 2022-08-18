function newItem () {

    // ADD ITEMS TO LIST
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue)

    if (inputValue === ''){
        alert('write something')
    } else {
        $('#list').append(li)
    }

    // CROSS OUT INDIVIDUAL LIST ITEMS
    function crossOut () {
        li.toggleClass('strike')
    }

    li.on('dblclick', function crossOut(){
        li.toggleClass('strike')
    })

    // REMOVE INDIVIDUAL LIST ITEM 
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('x'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete')
    }
    
    // RE-ORDER LIST ITEM
    $('#list').sortable();



};