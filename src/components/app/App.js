import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { simpleAction } from '../../actions/simpleAction'
import LandingPage from '../landing-page/lading-page'
import Navigation from '../shared/navigation'
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  ...state
})
class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }
  // Toggle if navbar menu is open or closed
  toggleMenu(collapse) {
    collapse.classList.toggle('collapse');
    collapse.classList.toggle('in');
  }

  // Close dropdowns when screen becomes big enough to switch to open by hover
  closeMenusOnResize(collapse, dropdowns) {
    if (document.body.clientWidth >= 768) {
      this.closeMenus(dropdowns);
      collapse.classList.add('collapse');
      collapse.classList.remove('in');
    }
  }

  // Close all dropdown menus
  closeMenus = (dropdowns) => {
    for (var j = 0; j < dropdowns.length; j++) {
      dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
      dropdowns[j].classList.remove('open');
    }
  }
  
  componentDidMount() {
    // Navbar and dropdowns
    var toggle = document.getElementsByClassName('navbar-toggler')[0],
      collapse = document.getElementsByClassName('navbar-collapse')[0],
      dropdowns = document.getElementsByClassName('dropdown');;
    // Add click handling to dropdowns
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener('click', function () {
        if (document.body.clientWidth < 768) {
          var open = this.classList.contains('open');
          this.closeMenus(dropdowns);
          if (!open) {
            this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
            this.classList.toggle('open');
          }
        }
      });
    }
    // Event listeners
    window.addEventListener('resize', this.closeMenusOnResize.bind(this, collapse, dropdowns), false);
    toggle.addEventListener('click', this.toggleMenu.bind(this, collapse), false);
  }

  render() {
    const links = [
      { label: 'Home', active: true },
      { label: 'Link' },
      { label: 'Disabled', disabled: true }
    ];

    return (
      <div className="App">
        <header>
          <Navigation links={links} />
        </header>
        <div style={{ marginBottom: 200 }}>
        </div>
        <LandingPage />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);