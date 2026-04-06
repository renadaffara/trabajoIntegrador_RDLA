import React, { Component } from "react";

class Favorites extends Component {
constructor(props) {
            super(props);
            this.state = {
            favs: JSON.parse(localStorage.getItem("favs")) || []
};
}

render() {
         return (
<section>
<h1>Favoritos</h1>
{this.state.favs.map(id => (
<p key={id}>{id}</p>
))}
</section>
);
}
}

export default Favorites;






