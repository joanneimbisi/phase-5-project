const ErrorComponent = ({ name, errors }) => {
    if (!errors || errors.length === 0) return null

    return errors.map(error => {
        return <div key={error}>{`${name} ${error}`}</div>
    })
}
export default ErrorComponent