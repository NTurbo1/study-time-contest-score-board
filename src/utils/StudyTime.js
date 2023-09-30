export const setAllReportsFalse = () => {
    localStorage.setItem('shokhaReported', false)
    localStorage.setItem('toreReported', false)
    localStorage.setItem('nurboReported', false)
}

export const setAllStudyTimesEmpty = () => {
    localStorage.setItem('shokha_study_time', '')
    localStorage.setItem('tore_study_time', '')
    localStorage.setItem('nurbo_study_time', '')
}