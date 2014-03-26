Top5
====

basic.less
-- some basic variables and mixins
-- we probably just need these most of the times instead of magic-bootstrap.less

style.less
-- import magic-bootstrap.less & basic.less
-- contained styles for nav bar and cat menu (so menu.less has been moved to archive, can delete later )
-- move styles for adding list into this file after done and testing
-- should be imported by each page’s less
-- so that each html (page) only contains 1 css file which is the page’s css

parts/menu.html
-- here is the code for category menu
-- so in each html (page), we could place markup: ()
<section id='t5-cat-menu'></section>
<script>
      $("#t5-cat-menu").load("parts/menu.html");
</script>
-- probably will do the same thing for nav bar (but we have two versions of nav bar and nav bar need bootstrap and magic-bootstrap.less, which i don't want to include them twice)
