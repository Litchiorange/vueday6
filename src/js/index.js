class Table {
    constructor(opt) {
        this.opt = opt;
        this.tableBox = document.querySelector('.wrap');
        this.tabletop = document.querySelector('.top');
        this.tablecont = document.querySelector('.cont');
        this.classname = opt.classname;

        //调用方法
        this.init()
    }
    init() {
        this.addEvent();
    }
    addEvent() {
        this.topbtn = [...this.tabletop.children];
        this.conbtn = [...this.tablecont.children];
        //遍历
        Object.values(this.topbtn).forEach((item, i) => {
            item.onclick = () => {
                this.change(i);
            }
        });
    }
    change(ind) {
        Object.values(this.topbtn).forEach((key, index) => {
            key.onclick = () => {
                key.classList.remove(this.classname);
                this.conbtn[index].classList.remove(this.classname);
            }
            this.topbtn[ind].classList.add(this.classname);
            this.conbtn[ind].classList.add(this.classname);
        });
    }
}