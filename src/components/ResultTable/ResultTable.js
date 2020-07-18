import React from 'react';

import trophy_icon from './assets/trophy_icon.png';
import styles from './ResultTable.module.scss';
import {Link} from "react-router-dom";


/* Stateless react component for showing the
 * table containing all the data for teams.
 */
function ResultTable(props) {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>
                        Date
                    </td>

                    <td>
                        Teams
                    </td>

                    <td>
                        Score
                    </td>
                </tr>
                </thead>

                <tbody>
                {(() => (
                    props.matches.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="text-center text-danger">
                                No more matches to show. Go back to <Link to={"/"}>Home?</Link>
                            </td>
                        </tr>
                    ) : (
                        props.matches.map(value => {
                            let draw = value.score.ft[0] === value.score.ft[1];
                            let team1Won = value.score.ft[0] > value.score.ft[1];

                            return (
                                <tr key={`${value.team1}-${value.team2}-${value.date}`}
                                    className={styles.table_row}>
                                    <td>{value.date}</td>
                                    <td>
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <img
                                                    className={`${styles.trophy_icon} mr-2 ${draw ? "d-none" : (team1Won ? "" : "d-none")}`}
                                                    src={trophy_icon} alt="trophy_icon"/>
                                                <a href="#"
                                                   className={styles.team}>{value.team1}</a>
                                            </div>

                                            <div className="col-lg-1 my-1 mt-md-0"><span className="mx-2">vs</span>
                                            </div>

                                            <div className="col-lg-5">
                                                <a href="#"
                                                   className={styles.team}>{value.team2}</a>
                                                <img
                                                    className={`${styles.trophy_icon} ml-2 ${draw ? "d-none" : (team1Won ? "d-none" : "")}`}
                                                    src={trophy_icon} alt="trophy_icon"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span
                                        className={`${draw ? "" : (team1Won ? "font-weight-bold" : "")}`}>{value.score.ft[0]}</span>
                                        <span className="mx-1">-</span>
                                        <span
                                            className={`${draw ? "" : (team1Won ? "" : "font-weight-bold")}`}>{value.score.ft[1]}</span>
                                    </td>
                                </tr>
                            );
                        })
                    )
                ))()}
                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;