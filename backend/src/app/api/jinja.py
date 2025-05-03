def fix_jinja_for_app(app):
    # Add enumerate to jinja globals
    app.jinja_env.globals.update(enumerate=enumerate)
    return app