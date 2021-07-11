const Preview = ({ cv }) => {
    console.log('in preview', cv)
    return (
        <div className="w3-container margin" style={{ display: 'flex', justifyContent: 'center' }}
        >
            <div className="w3-card cv-container">
                <div className="margin-preview">
                    <h2>{cv.personalInfo.firstName} {cv.personalInfo.lastName}</h2>
                    <div>
                        <span>{cv.personalInfo.address} &nbsp;</span>
                        {cv.personalInfo.phone ?
                            <span>&#8226; {cv.personalInfo.phone}</span>
                            : <span></span>
                        } &nbsp;
                        {cv.personalInfo.email ?
                            <span>&#8226; {cv.personalInfo.email}</span>
                            : <span></span>
                        } &nbsp;
                        {cv.personalInfo.email ?
                            <div>&#8226; {cv.personalInfo.email}</div>
                            : <div></div>
                        }
                    </div>
                    <hr className="divider"></hr>
                    <p className="m0 display bold" style={{ top: '-32px', position: 'relative' }}>{cv.personalInfo.title}</p>
                    <hr style={{ position: 'relative', top: '-3em' }}></hr>
                    <div className="display textAlign" style={{ position: 'relative', top: '-3em' }}>{cv.personalInfo.summary}</div>
                    <hr className="divider" style={{ position: 'relative', top: '-3em' }}></hr>
                    <p className="m0 display bold" style={{ top: '-5.4em', position: 'relative' }}>Professional Experience</p>
                    <hr style={{ position: 'relative', top: '-6em' }}></hr>
                    <div className="display textAlign" style={{ position: 'relative', top: '-5.4em' }}>
                        {cv.experience.map((exp, idx) => {
                            return (
                                <div style={{ display: "grid", marginTop: idx > 0 ? '10px' : '' }} >
                                    <div className="bold">
                                        <span>{exp.company}</span> -
                                        <span>{exp.city}</span> |
                                        <span>{exp.position} &nbsp;</span>
                                        <span>{exp.fromDate}</span> -
                                        <span>{exp.toDate}</span>

                                    </div>
                                    <div>
                                        {exp.roles}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <hr className="divider" style={{ position: 'relative', top: '-5em' }}></hr>
                    <p className="m0 display bold" style={{ top: '-7.4em', position: 'relative' }}>Education</p>
                    <hr style={{ position: 'relative', top: '-8em' }}></hr>
                    <div className="display textAlign" style={{ position: 'relative', top: '-7.4em' }}>
                        {cv.education.map((edu, idx) => {
                            return (
                                <div style={{ display: 'flex', marginTop: idx > 0 ? '10px' : '' }} >
                                    <div className="bold flex">
                                        <span>{edu.fromDate}</span> -
                                        <span>{edu.toDate}</span>
                                    </div>
                                    <div className="flex-2">
                                        <span className="bold">{edu.universityName}</span>
                                        <p className="m0">{edu.degree}</p>
                                        <p className="m0">{edu.stream}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Preview;