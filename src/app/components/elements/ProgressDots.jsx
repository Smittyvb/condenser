import React from 'react';
import PropTypes from 'prop-types';
import shouldComponentUpdate from 'app/utils/shouldComponentUpdate';

export default class UserAccessTable extends React.Component {
    constructor(props) {
        // props should have props.stage and props.stages (1-indexed)
        if (!props.stages) {
            props.stages = 4;
        }
        if (!props.stage) {
            props.stage = 1;
        }
        super();
        this.state = props;
    }

    shouldComponentUpdate = shouldComponentUpdate(this, 'UserAccessTable');
    render() {
        var dots = [];
        for (var filledDots = 0; filledDots < ((this.props.stages - this.props.stage)); filledDots++) {
            dots.push(<div className="progressDot progressDotFilled" key={"filled" + filledDots.toString(10)}></div>);
        }
        dots.push(<div className="progressDot progressDotActive" key="activeDot"></div>)
        for (var emptyDots = 0; emptyDots < (this.props.stages - (this.props.stages - this.props.stage)) - 1; emptyDots++) {
            dots.push(<div className="progressDot progressDotEmpty" key={"empty" + emptyDots.toString(10)}></div>);
        }
        //var dots = Array((props.stages - props.stage) - 1).fill(<div className="progressDot progressDotFilled"></div>);
        //dots.push(<div className="progressDot progressDotActive"></div>)
        //dots = props.dots.concat(props.dots, Array(props.stage).fill(<div className="progressDot progressDotEmpty"></div>));
        console.log("dots", dots);
        return <div class="progressDots">{dots}</div>;
    }
}
