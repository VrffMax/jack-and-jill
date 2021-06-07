<script type="ts">
	let login: string = '';
	let password: string = '';

	let isValidated: boolean = false;

	let isLoginError: boolean = false;
	let loginError: string;

	let isPasswordError: boolean = false;
	let passwordError: string;

	const change = (): void => {
		if (isValidated) {
			validate();
		}
	};

	const validate = (): boolean => {
		if (login.trim() === '') {
			isLoginError = true;
			loginError = 'Required';
		} else {
			isLoginError = false;
		}

		if (password.trim() === '') {
			isPasswordError = true;
			passwordError = 'Required';
		} else {
			isPasswordError = false;
		}

		isValidated = true;

		return !isLoginError && !isPasswordError;
	};

	const authorizationClick = async (): Promise<void> => {
		if (!validate()) {
			return;
		}

		const request: string = JSON.stringify({
			login,
			password
		});

		console.log(request);

		const response = await fetch('/api/authorize', {
			method: 'POST',
			headers: {
				accept: 'application/json;charset=UTF-8',
				'content-type': 'application/json;charset=UTF-8'
			},
			body: request
		});

		if (response.ok) {
			const json = response.json();
			console.log(typeof json);
		}
	};
</script>

<div class="h2 padding center">Login</div>
<div class="container container-center-horizontal">
	<div class="padding">
		<input
			type="text"
			placeholder="Login"
			bind:value={login}
			class="text"
			maxlength="50"
			on:change={change}
		/>
		{#if isLoginError}
			<div class="error padding">{loginError}</div>
		{/if}
	</div>
	<div class="padding">
		<input
			type="password"
			placeholder="Password"
			bind:value={password}
			class="text"
			maxlength="50"
			on:change={change}
		/>
		{#if isPasswordError}
			<div class="error padding">{passwordError}</div>
		{/if}
	</div>
	<div class="padding">
		<input type="button" value="Authorization" class="button" on:click={authorizationClick} />
	</div>
</div>

<style>
	div.error {
		color: var(--public-error-color);
	}
</style>
