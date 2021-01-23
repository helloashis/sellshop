<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                <h1>Category</h1>
                </div>
                <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Deshboard</a></li>
                    <li class="breadcrumb-item active">Category</li>
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
                    <div class="col-md-8 offset-md-2">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Category List</h3>
                                <router-link to="/addcategory" class="btn btn-success btn-sm float-right">Create Category</router-link>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <table id="example2" class="table table-bordered table-hover">
                                <thead class="light">
                                <tr>
                                    <th>SL NO</th>
                                    <th>Category name</th>
                                    <th>Slug</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Test</td>
                                    <td>__test</td>
                                    <td> Active</td>
                                    <td>
                                        <a href="" class="btn btn-success btn-sm"> <i class="fas fa-edit"></i> Edit</a>
                                        <a href="" class="btn btn-danger btn-sm"> <i class="fas fa-trash"></i> Delete</a>
                                    </td>
                                </tr>
                                </tbody>
                                </table>
                            </div>
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
        name:'Category',

    }
</script>
