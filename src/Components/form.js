//Form Component

export function registerForm() {

    if( document.getElementById("form")) {
    document.getElementById("form").innerHTML = `
    <div class="container-md d-flex justify-content-center">
        <div class="col-lg">
            <div class="card mt-5 mb-5">

                <div class="card-body">
                    <form role="form" data-toggle="validator">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" data-error="You must have a name." id="inputName" placeholder="Name" required>

                            <!-- Error -->
                            <div class="help-block with-errors"></div>
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Email" required>

                            <!-- Error -->
                            <div class="help-block with-errors"></div>
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <div class="form-group">
                                <input type="password" data-minlength="4" class="form-control" id="inputPassword"
                                    data-error="Have atleast 4 characters" placeholder="Password" required />

                                <!-- Error -->
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Confirm Password</label>
                            <div class="form-group">
                                <input type="password" class="form-control" id="inputConfirmPassword"
                                    data-match="#inputPassword" data-match-error="Password don't match"
                                    placeholder="Confirm" required />

                                <!-- Error -->
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-dark btn-block">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
    }
  }