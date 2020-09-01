<template>
<div class="header">
    <!-- Start intro section -->
    <section id="intro" >
        <div class="logo-menu">
            <nav class="navbar navbar-default affix-top navbar-border" role="navigation" data-spy="affix" data-offset-top="50">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand logo" href="index.html"><img src="/static/img/logochev2.png" alt="" /></a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbar">
                        <!-- Start Navigation List -->
                        <ul class="nav navbar-nav">
                            <li class="drop">
                                <a class="active" href="index.html">
                                    Inicio
                                </a>
                            </li>
                            <li class="drop">
                                <a href="#">
                                    Publicar oferta
                                </a>
                            </li>
                            <li class="drop">
                                <a href="#">
                                    Crear CV
                                </a>
                            </li>
   
                        </ul>
                        <ul class="nav navbar-nav navbar-right float-right">
                            <li class="right">
                                <button class="btn btn-primary btn-sm btn-principal-head">Ingresar / Registrar</button>
                            </li>                          
                        </ul>
                    </div>
                </div>

                <!-- Mobile Menu Start -->
                <ul class="wpb-mobile-menu">
                    <li>
                        <a class="active" href="index.html">Home</a>
                        <ul>
                            <li><a class="active" href="index.html">Home 1</a></li>
                            <li><a href="index-02.html">Home 2</a></li>
                            <li><a href="index-03.html">Home 3</a></li>
                            <li><a href="index-04.html">Home 4</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="about.html">Pages</a>
                        <ul>
                            <li><a href="about.html">About</a></li>
                            <li><a href="job-page.html">Job Page</a></li>
                            <li><a href="job-details.html">Job Details</a></li>
                            <li><a href="resume.html">Resume Page</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="pricing.html">Pricing Tables</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">For Candidates</a>
                        <ul>
                            <li><a href="browse-jobs.html">Browse Jobs</a></li>
                            <li><a href="browse-categories.html">Browse Categories</a></li>
                            <li><a href="add-resume.html">Add Resume</a></li>
                            <li><a href="manage-resumes.html">Manage Resumes</a></li>
                            <li><a href="job-alerts.html">Job Alerts</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">For Employers</a>
                        <ul>
                            <li><a href="post-job.html">Add Job</a></li>
                            <li><a href="manage-jobs.html">Manage Jobs</a></li>
                            <li><a href="manage-applications.html">Manage Applications</a></li>
                            <li><a href="browse-resumes.html">Browse Resumes</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                        <ul class="dropdown">
                            <li><a href="blog.html">Blog - Right Sidebar</a></li>
                            <li><a href="blog-left-sidebar.html">Blog - Left Sidebar</a></li>
                            <li><a href="blog-full-width.html">Blog - Full Width</a></li>
                            <li><a href="single-post.html">Blog Single Post</a></li>
                        </ul>
                    </li>
                    <li class="btn-m">
                        <a href="post-job.html"><i class="ti-pencil-alt"></i> Publicar aviso</a>
                    </li>
                    <li class="btn-m">
                        <a href="my-account.html"><i class="ti-lock"></i> Ingresar a cuenta</a>
                    </li>
                </ul>
                <!-- Mobile Menu End -->
            </nav>
        </div>
        
    </section>
</div>   
</template>

 

<script>
  
export default {
  name: 'HeaderMenu',
  mounted(){
      

  },
  components: {
   
  },
   
  computed: {
   
  }
}
</script>
