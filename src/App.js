import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Link from './Link';
import './App.css';

const GET_REPOSITORIES = gql`
    query getRepositories($queryRepo: String!) {
        search(query: $queryRepo, type: REPOSITORY, first: 100) {
            nodes {
                ... on Repository {
                    id
                    name
                    description
                    url
                }
            }
        }
    }
`;

class App extends Component {
    state = {
        links: [],
        queryRepo: 'reactjs'
    };

    onChange = e => {
        return this.setState({ queryRepo: e.target.value });
    };

    render() {
        return (
            <div className="App">
            <h1>Git Hub Repositories</h1>
                <div>
                    Search
                    <input
                        value={this.state.queryRepo}
                        type="text"
                        onChange={this.onChange}
                    />
                    <button onClick={() => this._executeSearch()}>OK</button>
                </div>
                {this.state.links.map(link => (
                    <Link
                        key={link.id}
                        name={link.name}
                        url={link.url}
                        description={link.description}
                    />
                ))}
            </div>
        );
    }

    _executeSearch = async () => {
        const { queryRepo } = this.state;
        const result = await this.props.client.query({
            query: GET_REPOSITORIES,
            variables: { queryRepo }
        });
        const links = result.data.search.nodes;
        this.setState({ links });
        this.setState({ queryRepo: ' ' });
    };
}

export default withApollo(App);
