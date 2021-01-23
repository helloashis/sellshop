<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                <h1>Add Category</h1>
                </div>
                <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Deshboard</a></li>
                    <li class="breadcrumb-item"><a href="#">Category</a></li>
                    <li class="breadcrumb-item active">Add Category</li>
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
                                <h3 class="card-title">Category Info</h3>
                                <router-link to="/category" class="btn btn-success btn-sm float-right">All Category</router-link>
                            </div>
                            <!-- /.card-header -->
                            <form class="form-horizontal" @submit.prevent="save" @keydown="form.onKeydown($event)">
                                <div class="card-body">
                                <div class="form-group row">
                                    <label for="title" class="col-sm-4 col-form-label">Category Name</label>
                                    <div class="col-sm-8">
                                    <input type="text" v-model="form.title" class="form-control" id="title" placeholder="Category Name" :class="{ 'is-invalid': form.errors.has('title') }">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-md-4 col-sm-3">
                                        <div class="form-check">
                                            <input type="radio" v-model="form.status" class="form-check-input" id="active" checked value="1">
                                            <label class="form-check-label" for="active">Active</label>

                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-check">
                                            <input type="radio" v-model="form.status" class="form-check-input" id="inactive" value="0">
                                            <label class="form-check-label" for="inactive">In-active</label>

                                        </div>
                                    </div>
                                </div>
                                </div>
                                <!-- /.card-body -->
                                <div class="card-footer">
                                <button type="submit" :disabled="form.busy" class="btn btn-success float-right"> Submit</button>
                                <button type="reset" class="btn btn-danger ">Cancel</button>
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
        name:'AddCategory',
        data: function () {
            return {

                form: new Form({
                    title: '',
                    status: false
                })
            }
        },
        methods: {
            save () {
            this.form.post('/add-category')
                alert("Success!");
            }
        }

    }
</script>
