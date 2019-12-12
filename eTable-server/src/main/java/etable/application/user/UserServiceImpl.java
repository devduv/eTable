package etable.application.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import etable.domain.cliente.model.Cliente;
import etable.domain.user.model.User;
import etable.domain.user.model.UserDTO;
import etable.domain.user.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository repository;
	
	@Override
	public User crearNuevoUsuario(User user) {
		String password = user.getPassword();
		user.setPassword("");
		return repository.crearUsuario(user, password);
	}

	@Override
	public User actualizarUsuario(User user) {
		return this.repository.editUser(user);
	}

	@Override
	public List<UserDTO> getUsuarios() {
		return repository.getUsuarios();
	}

	@Override
	public boolean eliminarUsuarioById(User user) {
		return repository.eliminarUsuarioById(user.getCusuario());
	}

	@Override
	public Cliente crearCliente(User user, Cliente cliente) {
		return this.repository.crearCliente(user, cliente);
	}

	@Override
	public User getUsuarioByAuthentication(User user) {
		return this.repository.getUsuarioByAuthentication(user.getNickname(), user.getPassword());
	}

	@Override
	public User getUsuarioById(int id) {
		return this.repository.getUsuarioById(id);
	}

	@Override
	public boolean deleteUser(int id) {
		User user = this.getUsuarioById(id);
		if (user != null) {
			return this.repository.deleteUser(id);
		} else {
			return false;
		}
	}

	@Override
	public Cliente actualizarCliente(Cliente cliente) {
		return this.repository.editCliente(cliente);
	}

	@Override
	public List<Cliente> getClientes() {
		return this.repository.getClientes();
	}

	@Override
	public Cliente getClienteById(int id) {
		return this.repository.getClienteById(id);
	}

}