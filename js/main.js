var tab = function () {
    var tabTitle = document.querySelectorAll('.tabs__item');
    var tabContent = document.querySelectorAll('.section_one__text');
    var tabName;

    tabTitle.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav () {
        // console.log(1);
        tabTitle.forEach(item => {
            item.classList.remove('tabs__orange');
        }); 
        this.classList.add('tabs__orange');

        tabName = this.getAttribute('data-tab-numb');
        selectTabName(tabName);
    }

    function selectTabName (tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active__text') :item.classList.remove('active__text');
        })
    }
}

tab();