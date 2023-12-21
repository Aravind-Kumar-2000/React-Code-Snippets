//Consider this as a template for CRUD Operations

async function apirequest(URL = "", optionsObject = null, errMsg = null) {
  try {
    const response = await fetch(URL, optionsObject);
    if (!response.ok) throw Error("Please reload the APP!");
  } catch (err) {
    errMsg = err.Message;
  } finally {
    return errMsg;
  }
}

export default apirequest;
