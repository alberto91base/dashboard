import React, { useState, useEffect } from 'react';

//redux
import { connect } from 'react-redux';

//selectors
import { getAlert } from '@redux/modules/app/selectors';

const AlertIndicator = ({ className, alert }) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(false);
    };

    useEffect(() => {
        alert.message && setShow(true);

        let timeoutShow = setTimeout(() => {
            setShow(false);
        }, 4000);

        return () => {
            clearTimeout(timeoutShow);
        };
    }, [alert]);

    if (!show) {
        return null;
    }
    return (
        <div className={`${className}`}>
            <div className={`alertIndicator alertIndicator__${alert.type}`}>
                <p>{alert.message}</p>
                <button onClick={handleClick}>Aceptar</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    alert: getAlert(state),
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AlertIndicator);
