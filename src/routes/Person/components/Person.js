import React from 'react'
import PropTypes from 'prop-types'
import {browserHistory} from 'react-router'

class Person extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }

        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        let userName = this.props.location.query.userName;

        let url = 'https://api.github.com/users/' + userName;
        var me = this;
        fetch(url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            console.log('parsed json', json);
            me.setState({
                user: json
            });

        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }

    goBack() {
        this.context.router.goBack();

    }


    render() {
        return (
            <div>
                <div className="row header">
                    <div onClick={browserHistory.goBack} className="col-sm-2">
                        Back
                    </div>

                    <div className="col-sm-10">
                        Person
                    </div>

                </div>

                <div className="row content">
                    <div className="col-sm-12">
                        <div className="media">
                            <img className="mr-3" src={this.state.user.avatar_url} alt="Generic placeholder image"/>
                            <div className="media-body">
                                <h5 className="mt-0">{this.state.user.name}</h5>
                                {this.state.user.location}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Person.propTypes = {};

export default Person
