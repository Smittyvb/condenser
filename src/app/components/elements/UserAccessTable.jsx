import React from 'react';
import PropTypes from 'prop-types';
import shouldComponentUpdate from 'app/utils/shouldComponentUpdate';

export default class UserAccessTable extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    shouldComponentUpdate = shouldComponentUpdate(this, 'UserAccessTable');
    render() {
        return (
            <div>
                <table className="userAccessTable">
                    <thead>
                        <tr>
                            <th>Roles &amp; privileges</th><th>Owner</th><th>Admin</th><th>Mod</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Wallet access</td><td>✓</td><td></td><td></td>
                        </tr>
                        <tr>
                            <td>Select moderators</td><td>✓</td><td>✓</td><td></td>
                        </tr>
                        <tr>
                            <td>Remove posts</td><td>✓</td><td>✓</td><td>✓</td>
                        </tr>
                        <tr>
                            <td>Select contributors</td><td>✓</td><td>✓</td><td>✓</td>
                        </tr>
                        <tr>
                            <td>Block users</td><td>✓</td><td>✓</td><td>✓</td>
                        </tr>
                        <tr>
                            <td>Change profile info</td><td>✓</td><td>✓</td><td>✓</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
