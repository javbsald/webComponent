import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-menu',
  styleUrl: 'styler.css',
  shadow: false
})
export class MyMenu {

  // https://www.joshmorony.com/accessing-and-adding-styles-to-the-host-element-in-stencil/
  // WebPage Referenced to create and access html id's and classes to modify them

  @State() showMenuClass: string = "start-menu";
  @State() bgOpacityClass: string = "";
  @State() menuWrapperClass: string = "";

  MenuAnimation(){
    if (this.showMenuClass == "start-menu"){
      this.showMenuClass = "start-menu active";
      // Open Menu
      this.bgOpacityClass = "showOpacity";
      this.menuWrapperClass = "showMenu";
    }else{
      this.showMenuClass = "start-menu";
      // Close Menu
      this.bgOpacityClass = "";
      this.menuWrapperClass = "";
    }
  }

  render() {
    return(
      <div>
        <div id="bg-opacity" class={this.bgOpacityClass}></div>
        <div id="wrapper">
        <div id="show-menu" class={this.showMenuClass} onClick={() => this.MenuAnimation()}>
          <span class="chevron"></span>
        </div>
        <div id="menu-wrapper" class={this.menuWrapperClass}>
          <div id="swipe-cmpnt" class="">
            <p>Select one of the options below</p>
            <ul>
              <li><a href="#">Menu <span>Option 1</span></a></li>
              <li><a href="#">Menu <span>Option 2</span></a></li>
              <li><a href="#">Menu <span>Option 3</span></a></li>
              <li><a href="#">Menu <span>Option 4</span></a></li>
              <li><a href="#"><span class="far fa-life-ring"></span>Help Center</a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
