export function Agenda() {
  return (
    <>
      <form>
        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
