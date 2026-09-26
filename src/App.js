import React from 'react';
import ProfileCard from './ProfileCard';

class App extends React.Component {
  state = {
    person: {
      fullName: 'Ada Lovelace',
      bio: 'A mathematician and writer known for her work on early computing.',
      imgSrc: '/myphoto9.png',
      profession: 'Mathematician'
    },
    shows: true
  };

  toggleProfile = () => {
    this.setState(state => ({ shows: !state.shows }));
  };

  render() {
    return (
      <main>
        <h1>Profile</h1>
        <button onClick={this.toggleProfile}>
          {this.state.shows ? 'Hide profile' : 'Show profile'}
        </button>

        {this.state.shows && (
          <ProfileCard person={this.state.person} />
        )}
      </main>
    );
  }
}

export default App;