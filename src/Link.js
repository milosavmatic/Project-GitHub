import React from 'react';

export default function Link({ name, url, description }) {
    const styles = {
        link: {
            borderWidth: 2,
            borderStyle: 'solid',
            margin: 5,
            borderRadius: 10,
            padding: 5,
            width: '50%',
            backgroundColor: 'gray'
        }
    };
    return (
        <div style={styles.link}>
            <h1>{name}</h1>
            <p>{description}</p>
            <a href={url}>Link</a>
        </div>
    );
}
