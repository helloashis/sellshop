<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                <h1>Add Brand</h1>
                </div>
                <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Deshboard</a></li>
                    <li class="breadcrumb-item"><a href="#">Brand</a></li>
                    <li class="breadcrumb-item active">Add Brand</li>
                </ol>
                </div>
            </div>
            </div><!-- /.container-fluid -->
        </section>
        <!-- Main content -->
        <section class="content">

            <!-- Default box -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Brand Info</h3>
                                <router-link to="/brand" class="btn btn-success btn-sm float-right">All Brand</router-link>
                            </div>
                            <!-- /.card-header -->
                            <form class="form-horizontal">
                                <div class="card-body">
                                <div class="form-group row">
                                    <label for="title" class="col-sm-4 col-form-label">Brand Name</label>
                                    <div class="col-sm-8">
                                    <input type="text" class="form-control" id="title" placeholder="Brand Name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-md-4 col-sm-3">
                                        <div class="form-check">
                                            <input type="radio" name="status" class="form-check-input" id="active" checked value="1">
                                            <label class="form-check-label" for="active">Active</label>

                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-check">
                                            <input type="radio" name="status" class="form-check-input" id="inactive" value="0">
                                            <label class="form-check-label" for="inactive">In-active</label>

                                        </div>
                                    </div>
                                </div>
                                </div>
                                <!-- /.card-body -->
                                <div class="card-footer">
                                <button type="submit" class="btn btn-success float-right"> Submit</button>
                                <button type="submit" class="btn btn-danger ">Cancel</button>
                                </div>
                                <!-- /.card-footer -->
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- /.card -->

        </section>
    </div>
</template>

<script>
    export default {
        name:'AddBrand',

    }
</script>
